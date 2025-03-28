export const getStyles = () => ({
  wrapper: 'flex w-full flex-col gap-4 rounded-lg border bg-white p-4 shadow-md md:w-[600px]',
  title: 'text-lg font-bold',
  text: 'h-[84px] w-full resize-none rounded border p-2 outline-none focus:ring-2 focus:ring-blue-400',
  error: 'text-sm text-red-500',
  wrapperStatus: 'flex items-center gap-3 rounded-lg border p-3',
  input: 'h-5 w-5 cursor-pointer accent-blue-500',
  label: 'cursor-pointer text-base font-medium',
  wrapperButton: 'flex justify-between',
  button: 'rounded bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-700 disabled:opacity-50',
});
