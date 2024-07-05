### task:

# создание формы из переиспользуемых компонентов

- Добавьте в компонент MyButton props ключ type (имеется ввиду атрибут type указывающий тип кнопок)

- Создайте папку input в папке components, в ней создайте компонент Input.

- Компонент Input должен принимать в качестве props:

1. name - имеется ввиду атрибут name
2. type - имеется ввиду атрибут type
3. placeholder - атрибут placeholder
4. label - описание input в теге label

- Создайте папку loginForm в папке components, в ней - компонент LoginForm, добавьте стили.

- Импортируйте в loginForm заготовленные компоненты Input и Button и создайте из них форму с тремя input: login, email, password (нужно передать эти данные в качестве props) и кнопкой типа submit