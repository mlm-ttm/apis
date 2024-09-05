# Generated JavaScript SDK

```bash
export MLMBOX_API_PATH="$HOME/Documents/GitHub/mlm-ttm/apis"

npx grpc_tools_node_protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc_out=. mlmbox/types/account.proto
npx grpc_tools_node_protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc_out=. mlmbox/types/asset.proto
npx grpc_tools_node_protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc_out=. mlmbox/types/asset_pair.proto
npx grpc_tools_node_protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc_out=. mlmbox/types/bonus.proto
npx grpc_tools_node_protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc_out=. mlmbox/types/exchanger.proto
npx grpc_tools_node_protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc_out=. mlmbox/types/google_authenticator.proto
npx grpc_tools_node_protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc_out=. mlmbox/types/locale.proto
npx grpc_tools_node_protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc_out=. mlmbox/types/relationship.proto
npx grpc_tools_node_protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc_out=. mlmbox/types/sort.proto
npx grpc_tools_node_protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc_out=. mlmbox/types/status.proto
npx grpc_tools_node_protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc_out=. mlmbox/types/wallet.proto

npx grpc_tools_node_protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc_out=. mlmbox/client/account/account.proto
npx grpc_tools_node_protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc_out=. mlmbox/client/asset/asset.proto
npx grpc_tools_node_protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc_out=. mlmbox/client/asset_pair/asset_pair.proto
npx grpc_tools_node_protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc_out=. mlmbox/client/auth/auth.proto
npx grpc_tools_node_protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc_out=. mlmbox/client/finance/wallet.proto
npx grpc_tools_node_protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc_out=. mlmbox/client/google_authenticator/google_authenticator.proto
npx grpc_tools_node_protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc_out=. mlmbox/client/locale/locale.proto
npx grpc_tools_node_protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc_out=. mlmbox/client/matrix/matrix.proto
npx grpc_tools_node_protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc_out=. mlmbox/client/network/network.proto

npx grpc_tools_node_protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc_out=. google/protobuf/any.proto
npx grpc_tools_node_protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc_out=. google/protobuf/api.proto
npx grpc_tools_node_protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc_out=. google/protobuf/descriptor.proto
npx grpc_tools_node_protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc_out=. google/protobuf/duration.proto
npx grpc_tools_node_protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc_out=. google/protobuf/empty.proto
npx grpc_tools_node_protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc_out=. google/protobuf/field_mask.proto
npx grpc_tools_node_protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc_out=. google/protobuf/source_context.proto
npx grpc_tools_node_protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc_out=. google/protobuf/struct.proto
npx grpc_tools_node_protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc_out=. google/protobuf/timestamp.proto
npx grpc_tools_node_protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc_out=. google/protobuf/type.proto
npx grpc_tools_node_protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc_out=. google/protobuf/wrappers.proto
```