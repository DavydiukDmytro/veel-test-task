import clsx from 'clsx';

export const getStyles = (todos: boolean) => ({
  wrapper: clsx(' w-full', {
    'grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 xl:gap-8': todos,
  }),
});
