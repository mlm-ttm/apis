# Описание возможных ошибок для методов gRPC-сервиса `GiftShop`

## Общие ошибки для всех методов

1. **Ошибки базы данных или декодирования данных:**
    - **Status:** `INTERNAL`
        - **Текст ошибки:** `INTERNAL_DECODING` – Ошибка декодирования данных.
        - **Текст ошибки:** `INTERNAL_DATABASE_ERROR` – Ошибка работы с базой данных.

2. **Ошибки авторизации:**
    - **Status:** `UNAUTHENTICATED`
        - **Текст ошибки:** `ACCESS_TOKEN_INVALID_TOKEN` – Токен неверный.
        - **Текст ошибки:** `ACCESS_TOKEN_NOT_FOUND_ISSUER` – Не найден необходимый маркер в токене.
        - **Текст ошибки:** `ACCESS_TOKEN_INVALID_SIGNATURE` – Ошибка в цифровой подписи токена.
        - **Текст ошибки:** `ACCESS_TOKEN_EXPIRED_SIGNATURE` – Срок действия токена истёк.
        - **Текст ошибки:** `ACCESS_TOKEN_UNKNOWN` – Токен не найден в заголовке `authorization`.
        - **Текст ошибки:** `UNAUTHENTICATED` – Внутренняя ошибка, требующая повторной авторизации.

3. **Блокировка пользователя:**
    - **Status:** `PERMISSION_DENIED`
        - **Текст ошибки:** `ACCESS_TOKEN_PERMISSION_DENIED` – Пользователь забанен.

4. **Превышение лимита запросов:**
    - **Status:** `RESOURCE_EXHAUSTED`
        - **Текст ошибки:** `RESOURCE_EXHAUSTED` – Превышен лимит запросов (30 запросов в секунду).

---

## Описание ошибок для методов `GiftShop`

### Метод `Info`

- **Status:** `RESOURCE_EXHAUSTED`
    - **Текст ошибки:** `RESOURCE_EXHAUSTED` – Превышен лимит запросов.
- **Status:** `PERMISSION_DENIED`
    - **Текст ошибки:** `ACCESS_TOKEN_PERMISSION_DENIED` – Пользователь забанен.
- **Status:** `INTERNAL`
    - **Текст ошибки:** `INTERNAL_DECODING` – Ошибка декодирования данных.
    - **Текст ошибки:** `INTERNAL_DATABASE_ERROR` – Ошибка работы с базой данных.
- **Status:** `UNAUTHENTICATED`
    - **Текст ошибки:** `UNAUTHENTICATED` – Внутренняя ошибка, требующая повторной авторизации.
- **Status:** `PERMISSION_DENIED`
    - **Текст ошибки:** `ACCOUNT_NOT_FOUND` – Учётная запись не найдена.

---

### Метод `CardGet`

- **Status:** `RESOURCE_EXHAUSTED`
    - **Текст ошибки:** `RESOURCE_EXHAUSTED` – Превышен лимит запросов.
- **Status:** `PERMISSION_DENIED`
    - **Текст ошибки:** `ACCESS_TOKEN_PERMISSION_DENIED` – Пользователь забанен.
    - **Текст ошибки:** `GIFT_SHOP_CARD_NOT_ACCESS` – Нет доступа к карточке.
- **Status:** `INVALID_ARGUMENT`
    - **Текст ошибки:** `GIFT_SHOP_CARD_UNKNOWN` – Неизвестная карточка.
- **Status:** `INTERNAL`
    - **Текст ошибки:** `INTERNAL_DECODING` – Ошибка декодирования данных.
    - **Текст ошибки:** `INTERNAL_DATABASE_ERROR` – Ошибка работы с базой данных.
- **Status:** `UNAUTHENTICATED`
    - **Текст ошибки:** `UNAUTHENTICATED` – Внутренняя ошибка, требующая повторной авторизации.
- **Status:** `NOT_FOUND`
    - **Текст ошибки:** `GIFT_SHOP_CARD_NOT_FOUND` – Карточка не найдена.

---

### Метод `CardCreate`

- **Status:** `RESOURCE_EXHAUSTED`
    - **Текст ошибки:** `RESOURCE_EXHAUSTED` – Превышен лимит запросов.
- **Status:** `PERMISSION_DENIED`
    - **Текст ошибки:** `ACCESS_TOKEN_PERMISSION_DENIED` – Пользователь забанен.
- **Status:** `INVALID_ARGUMENT`
    - **Текст ошибки:** `GIFT_SHOP_CARD_DETAILS_WRONG` – Неверные данные карточки.
    - **Текст ошибки:** `GIFT_SHOP_CARD_AMOUNT_WRONG_VALUE` – Некорректное значение суммы.
    - **Текст ошибки:** `GIFT_SHOP_CARD_PHOTO_UNKNOWN` – Неизвестная фотография.
    - **Текст ошибки:** `GIFT_SHOP_CARD_PHOTO_WRONG_SIZE` – Некорректный размер фотографии.
    - **Текст ошибки:** `GIFT_SHOP_CARD_PHOTO_WRONG_FORMAT` – Некорректный формат фотографии.
- **Status:** `INTERNAL`
    - **Текст ошибки:** `INTERNAL_DECODING` – Ошибка декодирования данных.
    - **Текст ошибки:** `INTERNAL_DATABASE_ERROR` – Ошибка работы с базой данных.
- **Status:** `UNAUTHENTICATED`
    - **Текст ошибки:** `UNAUTHENTICATED` – Внутренняя ошибка, требующая повторной авторизации.
- **Status:** `PERMISSION_DENIED`
    - **Текст ошибки:** `ACCOUNT_NOT_FOUND` – Учётная запись не найдена.

---

### Метод `CardBuy`

- **Status:** `RESOURCE_EXHAUSTED`
    - **Текст ошибки:** `RESOURCE_EXHAUSTED` – Превышен лимит запросов.
- **Status:** `PERMISSION_DENIED`
    - **Текст ошибки:** `ACCESS_TOKEN_PERMISSION_DENIED` – Пользователь забанен.
    - **Текст ошибки:** `GIFT_SHOP_CARD_NOT_ACCESS` – Нет доступа к карточке.
    - **Текст ошибки:** `GIFT_SHOP_CARD_ALREADY_BOUGHT` – Карточка уже куплена.
    - **Текст ошибки:** `GIFT_SHOP_CARD_BALANCE_NOT_ENOUGH` – Недостаточно баллов для покупки.
- **Status:** `INVALID_ARGUMENT`
    - **Текст ошибки:** `GIFT_SHOP_CARD_UNKNOWN` – Неизвестная карточка.
- **Status:** `INTERNAL`
    - **Текст ошибки:** `INTERNAL_DECODING` – Ошибка декодирования данных.
    - **Текст ошибки:** `INTERNAL_DATABASE_ERROR` – Ошибка работы с базой данных.
- **Status:** `UNAUTHENTICATED`
    - **Текст ошибки:** `UNAUTHENTICATED` – Внутренняя ошибка, требующая повторной авторизации.
- **Status:** `NOT_FOUND`
    - **Текст ошибки:** `GIFT_SHOP_CARD_NOT_FOUND` – Карточка не найдена.

---

### Метод `Withdrawal`

- **Status:** `RESOURCE_EXHAUSTED`
    - **Текст ошибки:** `RESOURCE_EXHAUSTED` – Превышен лимит запросов.
- **Status:** `PERMISSION_DENIED`
    - **Текст ошибки:** `ACCESS_TOKEN_PERMISSION_DENIED` – Пользователь забанен.
    - **Текст ошибки:** `PROCESSING_NOT_AVAILABLE` – Процессинг недоступен.
    - **Текст ошибки:** `GIFT_SHOP_CARD_NOT_ACCESS` – Нет доступа к карточке.
    - **Текст ошибки:** `GIFT_SHOP_CARD_NOT_BOUGHT` – Карточка не была куплена.
    - **Текст ошибки:** `GIFT_SHOP_CARD_REVIEW_NEED` – Требуется оставить отзыв перед выводом.
    - **Текст ошибки:** `GIFT_SHOP_CARD_ALREADY_WITHDRAWAL` – Средства уже были выведены.
- **Status:** `INVALID_ARGUMENT`
    - **Текст ошибки:** `GIFT_SHOP_CARD_UNKNOWN` – Неизвестная карточка.
    - **Текст ошибки:** `PROCESSING_ADDRESS_WRONG` – Некорректный адрес для вывода.
- **Status:** `INTERNAL`
    - **Текст ошибки:** `INTERNAL_DECODING` – Ошибка декодирования данных.
    - **Текст ошибки:** `INTERNAL_DATABASE_ERROR` – Ошибка работы с базой данных.
- **Status:** `UNAUTHENTICATED`
    - **Текст ошибки:** `UNAUTHENTICATED` – Внутренняя ошибка, требующая повторной авторизации.
- **Status:** `NOT_FOUND`
    - **Текст ошибки:** `GIFT_SHOP_CARD_NOT_FOUND` – Карточка не найдена.

---

### Метод `Review`

- **Status:** `RESOURCE_EXHAUSTED`
    - **Текст ошибки:** `RESOURCE_EXHAUSTED` – Превышен лимит запросов.
- **Status:** `PERMISSION_DENIED`
    - **Текст ошибки:** `ACCESS_TOKEN_PERMISSION_DENIED` – Пользователь забанен.
    - **Текст ошибки:** `GIFT_SHOP_CARD_NOT_ACCESS` – Нет доступа к карточке.
    - **Текст ошибки:** `GIFT_SHOP_CARD_REVIEW_CRATE_NOT_ACCESS` – Нет доступа к созданию отзыва.
- **Status:** `INVALID_ARGUMENT`
    - **Текст ошибки:** `GIFT_SHOP_CARD_UNKNOWN` – Неизвестная карточка.
    - **Текст ошибки:** `GIFT_SHOP_CARD_REVIEW_LINK_UNKNOWN` – Ссылка на отзыв отсутствует.
    - **Текст ошибки:** `GIFT_SHOP_CARD_REVIEW_LINK_WRONG` – Некорректная ссылка на отзыв.
- **Status:** `INTERNAL`
    - **Текст ошибки:** `INTERNAL_DECODING` – Ошибка декодирования данных.
    - **Текст ошибки:** `INTERNAL_DATABASE_ERROR` – Ошибка работы с базой данных.
- **Status:** `UNAUTHENTICATED`
    - **Текст ошибки:** `UNAUTHENTICATED` – Внутренняя ошибка, требующая повторной авторизации.
- **Status:** `NOT_FOUND`
    - **Текст ошибки:** `GIFT_SHOP_CARD_NOT_FOUND` – Карточка не найдена.

