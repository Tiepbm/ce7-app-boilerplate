const items = [
  {
    id: 'tab-home-active',
    source: require(''),
  },
];

export function getIconByName(name: string) {
  return items.find(item => item.id === name);
}
