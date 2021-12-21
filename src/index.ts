import {
  parse as hjsonParse,
  stringify as hjsonStrigify } from 'hjson';

export function stringify(obj: Record<string, any>) {
  return hjsonStrigify(obj, {
    quotes: 'min',
    space: 2
  });
}

export function parse(text: string) {
  return hjsonParse(text);
}
