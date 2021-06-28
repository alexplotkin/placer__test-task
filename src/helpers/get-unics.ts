export default (arr: any[], key: string): any[] => [...new Set(arr.map((item) => item[key]).flat())]
