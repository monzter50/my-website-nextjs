interface DateProps {
  date: string | number | Date;

}
export const orderByDate = (prev: DateProps, current: DateProps):string | number | Date =>
  new Date(current.date).valueOf() - new Date(prev.date).valueOf();