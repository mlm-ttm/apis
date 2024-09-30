- Добавлен параметр кол-ва забронированных позиций в дереве в **mlmbox.types.Matrix.TreeAccount.Set**.
```protobuf
message mlmbox.types.Matrix.TreeAccount.Set {
  ...
  uint32 booking_quantity = 4; // Number of positions booked
}
```
- Добавлен параметр кол-ва забронированных позиций в дереве в **mlmbox.types.Matrix.TreeAccount**.
```protobuf
message mlmbox.types.Matrix.TreeAccount {
  ...
  uint32 booking_quantity = 2; // Number of positions booked
  ...
}
```
- Добавлен параметр определяющий (покупка или бронирование) позиции в дереве в **mlmbox.types.Matrix.Invoice.VerifiedResponse.Item**.
```protobuf
message mlmbox.types.Matrix.Invoice.VerifiedResponse.Item {
  uint32 tree_id = 1;
  uint32 tree_account_id = 2;
  uint32 position_id = 3;
  // Если is_booking == true, то значения tree_account_id и position_id будут равны нулю.
  bool is_booking = 4; // Если is_booking == true, то позиция забронирована, иначе позиция куплена.
}
```