- Покупка матриц и бинара перенесены в отдельный класс **Product** в **mlmbox/client/product/product.proto**.
- Модель данных вынесена в **mlmbox.types.Invoice** и расположено в **mlmbox/types/product.proto**.
```protobuf
service Product {
  rpc PreviewPurchase (mlmbox.types.Invoice.Request) returns (mlmbox.types.Invoice.PreviewResponse) {} // Preview of purchase of positions in the matrix
  rpc VerifiedPurchase (mlmbox.types.Invoice.Request) returns (mlmbox.types.Invoice.VerifiedResponse) {} // Confirmed process of purchasing positions in the matrix
}
```

- В **mlmbox/types/scheme.proto** переименованы аттрибуты (без указания матриц)
```protobuf
message Scheme {
  ...
  repeated mlmbox.types.Tree.Group tree_groups = 6;
  repeated mlmbox.types.Tree trees = 7;
  ...
}
```
- В **mlmbox/types/bonus.proto** добавлены новые типы бонусов: _**бинарный бонус**_ и _**матчинг от бинарного бонуса**_.
```protobuf

enum Bonus.Kind.Id {
  ...
  BONUS_BINARY = 6;
  BONUS_BINARY_MATCHING = 7;
}
```
- В **mlmbox/types/account.proto** вынесены общие модели классов для бинара и матрицы в отдельные модели данных.
- В модели данных позиции параметр **tree_account_id** переименован в **tree_account_entity_id**.
- В модели данных позиций добавлен параметр **tree_entity_id** (Он нужен для бинара. Отображает порядковый номер внутри дерева).
- В **mlmbox/client/network/network.proto** переименован аттрибут (без указания матриц).
```protobuf
message TeamResponse {
  ...
  repeated mlmbox.types.TreeAccount.Set account_tree_accounts = 4;
}
```
- В **mlmbox/client/matrix/matrix.proto** есть есть изменения путей моделей данных
```protobuf
service Matrix {
  rpc Info (google.protobuf.Empty) returns (mlmbox.types.Matrix.Info) {}
  rpc View (mlmbox.types.PositionView.Team) returns (mlmbox.types.Matrix.View) {}
  rpc SetReinvestConfig (mlmbox.types.Matrix.Reinvest.Request) returns (mlmbox.types.Matrix.Position) {} // Set reinvestment settings for the selected position
}
```
- Добавлен файл **mlmbox/client/binary/binary.proto** с методами для работы с бинаром.
```protobuf
service Binary {
  rpc Info (google.protobuf.Empty) returns (mlmbox.types.Binary.Info) {}
  rpc View (mlmbox.types.PositionView.Team) returns (mlmbox.types.Binary.View) {}
  rpc SetPositionBranchSelectStrategy (mlmbox.types.Binary.BranchSelectStrategy.Request) returns (mlmbox.types.Binary.Position) {}
}
```