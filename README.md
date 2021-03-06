Frontend Stage Community
===================

# Ссылки для самостоятельного изучения
- Что такое BEM  ->  https://ru.bem.info/ (critical!) - именование классов
- Что такое yarn ->  https://yarnpkg.com/lang/en/ (в общих чертах)
- Что такое Webpack ->  https://webpack.js.org/ (в общих чертах)

## Структура

```
bem/
  blocks            # bem-блоки
  blocks.adaptive   # адаптивные bem-блоки
  blocks.guide      # bem-блоки гайдовые, с документацией, много реализаций
  bundles           # бандлы, "сборники" бэм-блоков, из них собирается статика для страниц

config  # служебная папка
pages   # обычные html-страницы, на которых можно проверять верстку
root    # статика, генерится вебпаком, отсюда подключаем js и css
```

## Что нужно сделать, прежде чем приступить
1. Установить nodejs (nvm, n)
```
$ node -v
v8.8.1
```
2. Настроить редактор: линтеры, конфиги, плагины
3. Прочитать [Code Style](https://github.com/regru/frontend-stage/blob/master/CODESTYLE.md) и держать открытым
3. Прочитать [Code Style](https://github.com/regru/frontend-stage/blob/master/CODESTYLE.md) и держать открытым
3. Прочитать [Code Style](https://github.com/regru/frontend-stage/blob/master/CODESTYLE.md) и держать открытым
3. Прочитать [Code Style](https://github.com/regru/frontend-stage/blob/master/CODESTYLE.md) и держать открытым
4. Убедиться, что знаешь git


## Начало

Установит npm-модули
```
$ yarn
```

Глобальные модули
```
$ npm i -g webpack stylelint@7.9.0 stylelint-plugin-regru eslint eslint-plugin-regru csscomb@3.1.8
```

Соберет всю статику из модулей (bem-блоков) из папки bem => в папку root/dist, где all.css - all - имя бандла, css - технология
```
$ webpack
```

## Порядок работы
1. В репозитории будут Issues - задания для работы
2. Подписываемся исполнителем на определенный issue в свободном порядке. У каждого issue будет метка `easy`/`normal`/`hard` - субъективная оценка сложности. Можно это считать это индикатором, с которого можно начать. Можно делать много маленьких задач или  по-сложнее, но меньше.

3. Вся работа ведется в отдельной ветке от master-ветки, имя ветки: `{issue_number}_{blockname}_{username}`
Пример: **1_b-arrow_sobolev**
4. Далее можно создать Pull/Merge Request, где должны быть
- изменения в блоке
- страница с демонстрацией блока
- скриншот результата

5. Работа считается принятой когда в Pull/Merge Request:
- все комменты решены
- принят наставником и находится в общей ветке (master)
- issue закрыт


## Style Guide
- глобальные переменные i-variables.less
- миксины для адаптива i-less.less
- все размеры и отступы стремятся быть кратными 6 (6, 12, 18, 60 и тп)

## Что можно
1. Привести bem-блоки в соответствие с принятым [Code Style](https://github.com/regru/frontend-stage/blob/master/CODESTYLE.md)
- eslint path/to-file
- csscomb path/to-file
- руки
2. Сделать блоки адаптивными, сверстать под мобильные устройства (mobile-first)
3. Заменить картинки css-стилями (стрелочки, крестики, кружочки и т.п.)
4. Найти и исправить косяки в верстке (см. b-arrow.html)
5. Сделать стили по-умолчанию (дефолту, без модов)


## Что можно еще
1. Переписать legacy jquery-код под jquery 3, либо на VanillaJS
2. Переписать coffee на jquery 3, либо на VanillaJS
3. Переписать jade реализацию на vuejs
4. Написать vuejs-реализацию для блока
5. Переписать backbone-код на Vanilla/Jquery/VueJS
6. Можно использовать расширение `*.babel.js` для использования babel и новых стандартов

## Что можно еще +
1. Написать доку по использованию bem-блока в ТТ
2. Да, у нас используется http://www.template-toolkit.org/ в качестве Perl-шаблонизатора, ты можешь у себя настроить
Перл + ТТ и проапгрейдить ТТ реализацию блоков
3. blocks.guide - здесь блоки разной степени образцовости (по коду, по реализации), но и в них можно много чего улучшать


## Что бесполезно делать без обсуждения с наставником, но можно при желании

1. Менять текущую DOM-структуру верстки bem-блоков 
2. Менять названия БЭМ-блоков
3. Менять названия элементов и модификаторов БЭМ-блоков

Любые предложения, обсуждения, идеи - WELCOME!

## Как начать-то?

1. Линтеры настроены, модули установлены, вебпак собирает всё без ошибок
2. Создаем бандл по имени блока => например, `bundles/b-bg/b-bg.bemdecl`
3. Подключаем в нем необходимые блоки (в том числе скрипты плагины еще что-то)
4. Запускаем сборку `webpack` => читаем в логах возможные ошибки
5. Создаем файл `pages/b-bg.html`
6. Рефакторим! (смотри пример `pages/b-arrow.html`)

## Как проверять рефакторинг? CSS
Поддержка Браузеров browserlist - см. package.json
Вендорные префиксы встречаются достаточно редко, их можно не использовать, но отображение в браузерах должно быть корректным.
1 html-файл - 1 блок, этого достаточно чтобы потестировать блок/компонент. 

## Как проверять рефакторинг? JS
Все скрипты можно подключать в html, в том числе внешние (например Vue или Jade) для тестирования.
Если чего-то не хватает - запрашиваем в Issue (входные данные, модули, плагины) или у наставника.

## Не понятно, нужен пример верстки
По требованию, дадим конечно же. Структуру блока можно понять из less-файла или tt-шаблона.


## А что за странные блоки i-* ?
Некоторые блоки являются обертками для npm-модулей или плагинов

## А что за странные блоки l-* ?
l - layout, блоки-помощники, обычно служат для стилизации контента, отступов (l-margin, l-padding).

## Не хватает инфы для задачи, не понятно как будет вести себя блок с другими
Как вариант - посмотреть на сайте reg.ru, ссылку где посмотреть можно спросить.

## Примеры

Ошибки линтера в Sublime Text 3
![Sublime Plugin](/example.png?raw=true "Stylelint ST3 errors")

Красным подсвечиваются ошибки, которые нужно исправить


