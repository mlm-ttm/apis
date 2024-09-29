- Переименован параметр идентификатора канала в **mlmbox.client.auth.TelegramBotSignRequest**.
```protobuf
message TelegramBotSignRequest {
  uint32 channel_id = 1; // ранее было "auth_chanel_id"
  string init_data = 2;
}
```
- Добавлен параметр "channels" в **mlmbox.types.Account.Info**.
```protobuf
message mlmbox.types.Account.Info {
  ...
  repeated uint32 channels = 10; // Список идентификаторов каналов в которых участвует пользователь. (1-"TTM Partners", 2-"Ducks Tap", 3-"Casino").
}
```