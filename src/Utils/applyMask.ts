export default function applyMask(text: string): string {
    return text.replace(/<\/?[^>]+(>|$)/g, '').toString();
  }