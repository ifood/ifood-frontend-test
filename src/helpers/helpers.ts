export const classesFromObject = (classes: any, additionalClassName?: string) => {
  const availableClasses = [
    ...Object.keys(classes).filter((cls?: string) => cls && !!classes[cls]),
    ...[additionalClassName]
  ];

  return availableClasses.join(' ');
};
