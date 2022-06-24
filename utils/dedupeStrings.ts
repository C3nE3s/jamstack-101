export function dedupeStringArray(strArr: string[]): string {
  let combined = strArr.reduce((acc, curr): string[] => {
    return [...acc, curr]
  }, [] as string[])
  
  // TODO: need to change tsconfig to allow for spread on Set
  // @ts-ignore
  let final = [...new Set(combined)];
  return final.join(' ');
}