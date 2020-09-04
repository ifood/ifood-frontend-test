import { getMessagesByLocale, getLocale } from './L10n';
import { Messages } from './L10n.config';

let languageGetter;
beforeEach(() => {
  languageGetter = jest.spyOn(navigator, 'language', 'get');
});

test('getMessagesByLocale should return default messages', () => {
  const message = getMessagesByLocale();
  expect(message).to.be.equal(Messages.default);
});

test('getMessagesByLocale should return messages by locale', () => {
  const messages = getMessagesByLocale('pt-BR');
  expect(messages).to.be.equal(Messages['pt-BR']);
});

test("getMessagesByLocale should return locale by message if locale doen't have messages", () => {
  const messages = getMessagesByLocale('pt-PT');
  expect(messages).to.be.equal(Messages['pt-BR']);
});

test('getMessagesByLocale should return messages by lang', () => {
  const messages = getMessagesByLocale('en');
  expect(messages).to.be.equal(Messages.en);
});

test('getLocale default en-US', () => {
  languageGetter.mockReturnValue(null);
  const locale = getLocale();
  expect(locale).to.be.equal('en-US');
});

test('getLocale default navigator.language', () => {
  languageGetter.mockReturnValue('pt-BR');
  const locale = getLocale();
  expect(locale).to.be.equal('pt-BR');
});
