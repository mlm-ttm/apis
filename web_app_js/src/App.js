import React, { useState } from 'react';
import './App.css';
import { AuthClient } from './generated/mlmbox/client/auth/auth_grpc_web_pb';
import { TelegramBotSignRequest } from './generated/mlmbox/client/auth/auth_pb';
import * as mlmbox_types_status_pb from "./generated/mlmbox/types/status_pb";

function App() {
  const [inputValue, setInputValue] = useState('');
  const [response, setResponse] = useState('');
  const client = new AuthClient('https://ttm-partners.biconom.com', null, null);

  const callGrpcMethod = () => {
    const request = new TelegramBotSignRequest();
    request.setAuthChanelId(1);
    request.setInitData(inputValue);
    client.telegramBotSign(request, {}, (err, response) => {
        if (err) {
            console.error('Ошибка:', err.message);
            return;
        }
        switch (response.getAuthStatus()) {
          case mlmbox_types_status_pb.Status.Auth.AUTH_GUEST:
            console.info('Не авторизован');
            break;
          case mlmbox_types_status_pb.Status.Auth.AUTH_SIGN_IN:
            console.info('Авторизация');
            break;
          case mlmbox_types_status_pb.Status.Auth.AUTH_SIGN_UP:
            console.info('Регистрация');
            break;
        }
        switch (response.getReferralStatus()) {
          case mlmbox_types_status_pb.Status.Referral.REFERRAL_UNKNOWN:
            console.info('Реферрал отсутствует');
            break;
          case mlmbox_types_status_pb.Status.Referral.REFERRAL_WRONG_LINK:
            console.info('Реферральная ссылка не верного формата');
            break;
          case mlmbox_types_status_pb.Status.Referral.REFERRAL_BUSY:
            console.info('Реферрал уже существует у данного пользователя и нового установить не доступно');
            break;
          case mlmbox_types_status_pb.Status.Referral.REFERRAL_EXISTS:
            console.info('Реферрал уже существует у данного пользователя');
            break;
        }
        setResponse(response.getAccessToken());
    });
  };

  return (
      <div>
        <h1>gRPC запрос из React</h1>
        <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)} // Обновляем состояние при изменении input
            placeholder="Введите значение init_data"
        />
        <button onClick={callGrpcMethod}>Вызвать gRPC метод</button>
        {response && <p>JWT: {response}</p>}
      </div>
  );
}

export default App;
