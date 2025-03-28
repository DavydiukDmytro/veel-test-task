import clsx from 'clsx';

export const getStyles = (completed: boolean) => ({
  wrapper: 'flex h-[150px] flex-col justify-between rounded-lg border bg-white p-4 shadow-md md:h-[180px]',
  title:
    'block h-[84px] overflow-hidden text-base font-bold text-ellipsis first-letter:uppercase md:text-lg xl:text-xl',
  wrapperStatus: 'flex items-center justify-between',
  status: clsx(completed ? 'text-green-500' : 'text-red-500'),
  button:
    'cursor-pointer self-end rounded bg-red-400 px-4 py-2 text-white transition hover:bg-red-800 disabled:opacity-50',
});
