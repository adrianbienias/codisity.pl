W przykładzie z błędem, wartość `mileage` obiektu `myCar` wyniesie `0`.

Niedziałanie zwiększania wartości przez `this.mileage += distance` wynika z tego, że funkcje strzałkowe nie mają własnego `this` i nie powinny być używane jako metody obiektów.

`this.milage` nie odnosi się więc do obiektu, tak jakbyśmy tego chcieli.

Aby naprawić ten problem, musimy zamienić funkcję strzałkową `drive` na zwykłą funkcję.

Po tej zmianie, obiekt `myCar` zwróci już wartość `mileage` równą `1000`.
