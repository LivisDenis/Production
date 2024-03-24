## Запуск проекта

```
npm install – установка зависимостей
npm run start:dev – запуск сервера + frontend в dev режиме на Webpack
npm run start:dev:vite – запуск сервера + frontend в dev режиме на Vite
```

----

## Скрипты

- `npm run start:vite` – Запуск frontend на Vite
- `npm run start:dev` – Запуск frontend на Webpack + сервер
- `npm run start:dev:vite` – Запуск frontend на Vite + сервер
- `npm run start:dev:server` – Запуск сервера
- `npm run build:dev` – Сборка в dev режиме
- `npm run build:prod` – Сборка в prod режиме
- `npm run lint:ts` – Проверка ts файлов линтером
- `npm run lint:ts:fix` – Проверка и исправление ts файлов линтером
- `npm run lint:scss` – Проверка scss файлов style линтером
- `npm run lint:scss:fix` – Проверка и исправление scss файлов style линтером
- `npm run test:unit` – Запуск unit тестов с jest
- `npm run test:ui` – Запуск скриншотных тестов с loki
- `npm run test:ui:ok` – Подтверждение скриншотных тестов с loki
- `npm run test:ui:ci` – Запуск скриншотных тестов в CI
- `npm run test:ui:report` – Генерация полного отчета для скриншотных тестов
- `npm run test:ui:json` – Генерация json отчета для скриншотных тестов
- `npm run test:ui:html` – Генерация html отчета для скриншотных тестов
- `npm run storybook` – Запуск storybook
- `npm run storybook:build` – Сборка storybook

----

## Архитектура проекта
Проект написан в соответствии с методологией [Feature-Sliced Design](https://feature-sliced.design/ru/)

----

## Переводы
В проекте используется библиотека [i18next](https://www.i18next.com/), которая предназначена для управления переводами.

Переводы хранятся в папке `public/locales`

----

## Тесты

В проекте используется 4 вида тестов:
1) `npm run test:unit` – Обычные unit тесты с jest
2) `npm run test:unit` – Тестирование компонентов с React testing library
3) `npm run test:ui` – Скриншотное тестирование с loki

----

## Линтинг

В проекте используется eslint для проверки typescript кода и stylelint для проверки css кода.

Для строгого контроля главных архитектурных принципов используется собственный eslint plugin `eslint-plugin-livis-plugin`,
который содержит следующие правила:
1) `path-checker` – В рамках одного модуля все пути должны быть относительными
2) `public-api-import` – Абсолютный импорт разрешен только из Public Api (index.ts) или (testing.ts) для тестов

----

## Storybook

В проекте для каждого компонента описываются стори-кейсы

----

## Конфигурация проекта

Для разработки проект содержит 2 конфига:
- Vite – `vite.config.ts`
- Webpack – `./config/build`

Вся конфигурация содержится в папке `./config`:
- ./config/babel – babel
- ./config/build – конфигурация Webpack
- ./config/jest – конфигурация Jest
- ./config/storybook – конфигурация Storybook

----

## CI pipeline

Конфигурация github actions содержится в `.github/workflow`.
В ci прогоняются все виды тестов, сборка проекта и storybook.

----

## Работа с данными

Взаимодействия с данными происходит с помощью Redux toolkit.

Запросы на сервер осуществляются с помощью [rtk api](src/shared/api/rtkApi.ts). 

Для асинхронного подключения редюсеров(чтобы не тянуть в общий бандл) используется [DynamicModuleLoader](src/shared/lib/components/DynamicModuleLoader.tsx).

----

## Entities

- [Article](/src/entities/Article/README.md)
- [Comment](/src/entities/Comment/README.md)
- [CurrencySelect](src/entities/CurrencySelect/README.md)
- [Notification](src/entities/Notification/README.md)
- [Profile](src/entities/Profile/README.md)
- [Rating](src/entities/Rating/README.md)
- [User](src/entities/User/README.md)

----

## Features

- [addCommentForm](src/features/addCommentForm)
- [articleEditForm](src/features/articleEditForm)
- [articleRating](src/features/articleRating)
- [articleRecommendationList](src/features/articleRecommendationList)
- [AuthByUsername](src/features/AuthByUsername)
- [editableProfileCard](src/features/editableProfileCard)
- [notificationButton](src/features/notificationButton)
- [scrollRestore](src/features/scrollRestore)
