import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

const dateFormat = (
  date: Date | string,
  pattern: string = "dd MMM, yyyy",
): string => {
  const dateObj = new Date(date);
  const output = format(dateObj, pattern, { locale: ptBR });
  return output;
};

export default dateFormat;
