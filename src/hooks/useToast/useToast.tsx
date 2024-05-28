import { useContext } from 'react';
import { ToastContext } from '../../context/ToastContext';
import { ToastStatus } from '../../molecules/Toast/interfaces';
import { ToastListItem } from '../../context/ToastContext/interfaces';

const useToast = () => {
  const { toastList, setToastList } = useContext(ToastContext);

  const showToast = (message: string, status: ToastStatus) => {
    setToastList([
      ...toastList,
      {
        id: 'toast:' + Date.now().toString(),
        message,
        status,
      },
    ]);
  };

  type ShowPromiseStatus<T, E> = {
    call: Promise<T>;
    loadingMessage?: string;
    resolveMessage?: string;
    errorMessage?: string;
    onError?: (e: E | any) => string;
    onResolve?: (res: T) => string;
  };

  function showPromiseStatus<T, E>({
    call,
    loadingMessage = 'Cargando...',
    resolveMessage = 'Tarea completada con exito',
    errorMessage = 'Ocurrió un error desconocido',
    onResolve,
    onError,
  }: ShowPromiseStatus<T, E>) {
    const toastId = 'promiseToast:' + Date.now().toString();
    const toastIndex = toastList ? toastList.length : 0;
    setToastList([
      ...toastList,
      {
        id: toastId,
        message: loadingMessage,
        status: 'pending',
        waitingForResolve: true,
      },
    ]);

    call
      .then(res => {
        const message = onResolve ? onResolve(res) : resolveMessage;
        const updatedToast: ToastListItem = {
          ...toastList[toastIndex],
          message: message,
          status: 'success',
          waitingForResolve: false,
        };

        let updatedList = toastList ?? [];
        updatedList[toastIndex] = updatedToast;
        setToastList(updatedList);
      })
      .catch(e => {
        const message = onError ? onError(e) : errorMessage;
        const updatedToast: ToastListItem = {
          ...toastList[toastIndex],
          message: message,
          status: 'error',
          waitingForResolve: false,
        };
        let updatedList = toastList ?? [];
        updatedList[toastIndex] = updatedToast;
        setToastList(updatedList);
      });
  }

  return {
    showToast,
    showPromiseStatus,
  };
};

export default useToast;
