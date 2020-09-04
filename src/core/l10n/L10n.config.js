import { ptBR, enUS } from 'date-fns/esm/locale';
import MessageEnUS from '../../lang/en-US.json';
import MessagePtBR from '../../lang/pt-BR.json';
import '../../component/DatePicker/DatePicker.config';
import './intl-displaynames.cofing';

const Messages = {
  default: MessageEnUS,
  en: MessageEnUS,
  pt: MessagePtBR,
  'en-US': MessageEnUS,
  'pt-BR': MessagePtBR,
};

const Locales = {
  'pt-BR': ptBR,
  'en-US': enUS,
  default: enUS,
};

export { Messages, Locales };
