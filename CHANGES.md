- Добавлен метод **mlmbox.client.app.App.SchemeInfo** для получения необходимой информации о схеме статичных данных в проекте.
```protobuf
// Модель результата запроса информации о схеме статичных данных 
message Scheme {
  repeated mlmbox.types.Asset assets = 1;
  repeated mlmbox.types.Exchanger.Rate asset_pair_exchange_rates = 2;
  repeated mlmbox.types.Locale locales = 3;
  repeated mlmbox.types.Wallet.Asset wallet_assets = 4;
  repeated mlmbox.types.Wallet.Processing wallet_processings = 5;
  repeated mlmbox.types.Matrix.Group matrix_groups = 6;
  repeated mlmbox.types.Matrix.Tree matrix_trees = 7;
}
```
- Изменены данные для отображения telegram в профиле пользователя на **mlmbox.types.Account.Profile.Telegram**
```protobuf
message mlmbox.types.Account.Profile.Telegram {
  uint64 id = 1;
  string username = 2;
}
```
- Добавлен дополнительный параметр "capacity" в **mlmbox.types.Wallet.Asset.WithdrawalCapacity**
```protobuf
message WithdrawalCapacity {
  string used = 1; // Значение использованного объема
  string capacity = 2; // Значение лимита
  string available = 3; // Оставшийся доступный объем
}
```
- Модели **mlmbox.types.Account.ShortInfo** и **mlmbox.types.Account.FullInfo** объединены в **mlmbox.types.Account.Info**
```protobuf
message Info {
  Profile profile = 1;
  Username account = 2;
  Username referral = 3;
  mlmbox.types.Relationship relationship = 4;
  uint32 registration_at = 5;
  uint32 matrix_started_at = 6;
  int32 matrix_tree_ids_bit_mask = 7;
  uint32 referral_branch = 8;
  Statistics statistics = 9;
}
```
В модели **mlmbox.types.Matrix.Position** параметр account заменен на account_id.
Данные account_id вынесены в отдельный параметр "accounts" в **mlmbox.types.Matrix.View**
```protobuf
message Position {
  uint32 position_id = 1; // Position identifier
  uint32 position_ref_id = 2; // Superior position identifier
  uint32 position_ref_line = 3; // Upstream branch identifier
  uint32 position_width = 4; // Number of available branches
  uint32 account_id = 5; // Account identifier
  uint32 tree_account_id = 6; // Sequence number in the (tree + account) combination
  bool reinvest_enabled = 7;
}
message View {
  uint32 tree_id = 1;
  uint32 self_position_id = 2;
  uint32 view_position_id = 3;
  repeated Position positions = 4;
  repeated mlmbox.types.Account.Info accounts = 5;
  repeated TreeAccount.Entity view_tree_account_entities = 6;
  int32 self_matrix_tree_ids_bit_mask = 7;
  int32 view_matrix_tree_ids_bit_mask = 8;
}
```
- Обновлена модель в **mlmbox.client.network.TeamResponse**
```protobuf
message TeamResponse {
  mlmbox.types.Account.Info account = 1;
  repeated mlmbox.types.Account.Info partners = 2;
  repeated mlmbox.types.Account.Info referrals = 3;
  repeated mlmbox.types.Matrix.TreeAccount.Set account_matrix_tree_accounts = 4;
}
```
- Обновлена модель в **mlmbox.client.network.TeamResponse**
```protobuf
message TeamResponse {
  mlmbox.types.Account.Info account = 1;
  repeated mlmbox.types.Account.Info partners = 2;
  repeated mlmbox.types.Account.Info referrals = 3;
  repeated mlmbox.types.Matrix.TreeAccount.Set account_matrix_tree_accounts = 4;
}
```
- В модели **mlmbox.types.Account** заменен параметр "matrix_config" на "matrix_tree_accounts".
- Значение групп, матричных деревьев и других важных системных данных, вынесены в отдельный метод **mlmbox.client.app.App::SchemeInfo()** 
```protobuf
message Account {
  ...
  mlmbox.types.Matrix matrix_config = 3; // старое значение
  repeated mlmbox.types.Matrix.TreeAccount matrix_tree_accounts = 3; // новое значение
  ...
}
```
