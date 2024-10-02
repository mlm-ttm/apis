- Добавлен новый метод **WithdrawalAddressHistory** в **mlmbox.client.finance.Wallet**. (Необходимый для отображения истории адресов вывода средств).
```protobuf
service mlmbox.client.finance.Wallet {
  ...
  rpc WithdrawalAddressHistory (mlmbox.types.Wallet.Processing.Asset.Id) returns (mlmbox.types.Wallet.Processing.Asset.WithdrawalAddressHistory) {}
}
```
- Добавлен параметр "booking_enabled" отображающий включен ли режим бронирования в дереве в **Matrix.Tree**.
```protobuf
message Matrix.Tree {
  ...
  bool booking_enabled = 7;
}
```
- Добавлен параметр "enabled" в **Wallet.Asset.WithdrawalCapacity**. Интерпретируется как "включен ли режим лимита вывода, или вывод без лимитов"
```protobuf
message Wallet.Asset.WithdrawalCapacity {
  string used = 1; // The value of the volume used
  string capacity = 2; // Limit value
  string available = 3; // Remaining available volume
  bool enabled = 4; // Is the limit used
}
```
- Добавлена новая модель для истории кошельков используемые для вывода **Wallet.Processing.Asset.WithdrawalAddressHistory**:
```protobuf
message Wallet.Processing.Asset.WithdrawalAddressHistory {
  message Value {
    string address = 3; // Адрес кошелька на которые ранее выводились средства
    uint32 last_used_at = 4; // Дата и время последнего использования адреса
  }
  repeated Value items = 1;
}
```
- Добавлен новый метод **GetAvaFiles** в **mlmbox.client.account.Account**. (Необходимый для загрузки аватарок в формате base64).
```protobuf
service mlmbox.client.account.Account {
  ...
  rpc GetAvaFiles (mlmbox.types.Account.Profile.Ava.List) returns (mlmbox.types.Account.Profile.Ava.File.List) {}
}
```