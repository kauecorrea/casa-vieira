export function formatPhone(phone: string): string {
  if (phone.length === 13 && phone.startsWith('55')) {
    const ddd = phone.substring(2, 4);
    const prefix = phone.substring(4, 9);
    const suffix = phone.substring(9);
    return `(${ddd}) ${prefix}-${suffix}`;
  }
  return phone;
}
