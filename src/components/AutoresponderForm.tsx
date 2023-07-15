import React from "react"
import axios from "axios"
import { FormEvent, useState } from "react"

type AutoresponderForm = {
  listId: string
  buttonText: string
}

export default function AutoresponderForm({
  listId,
  buttonText,
}: AutoresponderForm) {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
  const [emailError, setEmailError] = useState<string | null>(null)

  async function handleFormSubmit(event: FormEvent) {
    event.preventDefault()

    const form = event.target as HTMLFormElement
    const formData = new FormData(form)
    const email = formData.get("email") as string

    localStorage.setItem("email", email)

    setIsSubmitted(true) // Call after getting data from disabled form
    setEmailError(null)

    try {
      const subscribeApiEndpointUrl =
        "https://osems.codisity.pl/api/v1/public/contacts"
      const response = await axios.post(subscribeApiEndpointUrl, {
        email,
        listId,
      })
      window.location.assign(response.data.signupRedirectUrl)
    } catch (error: any) {
      setIsSubmitted(false)

      if (error?.response?.data?.error) {
        return setEmailError(error?.response?.data?.error)
      } else {
        console.error(error)
        return setEmailError("Niezdefiniowany błąd")
      }
    }
  }

  return (
    <>
      <form onSubmit={handleFormSubmit} autoComplete="on">
        <fieldset
          className="min-w-[360px] inline-flex flex-col gap-2 p-2 shadow-xl focus-within:shadow-xl transition-shadow duration-300 rounded-lg disabled:opacity-75 outline-3"
          disabled={isSubmitted}
        >
          <label htmlFor="inputEmail" className="sr-only">
            Twój email
          </label>
          <input
            name="email"
            type="email"
            id="inputEmail"
            className={`px-3 py-2 rounded-md placeholder:text-slate-500 ${
              emailError ? "border-2 border-rose-600" : ""
            }`}
            placeholder="twoj-adres@gmail.com"
          />

          <button className="text-white text-xl font-bold whitespace-nowrap py-4 rounded-md bg-blue-700 enabled:hover:bg-blue-800">
            {isSubmitted ? "Przetwarzam..." : buttonText}
          </button>
        </fieldset>

        {emailError && (
          <p className="mt-1 text-base text-rose-600">{emailError}</p>
        )}
      </form>
    </>
  )
}
