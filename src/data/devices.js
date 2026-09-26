export const devices = [
  {
    id: 'redmi-note-11t-5g', name: 'Redmi Note 11T 5G', codename: 'xaga', manufacturer: 'Xiaomi',
    androidVersions: ['Android 14', 'Android 13', 'Android 12', 'Android 11'], romCount: 5, firmware: 'Available', accent: 'cyan',
    summary: 'A performance-focused 5G device powered by the MediaTek Dimensity 810.',
    specs: [{ label: 'Display', value: '6.6” FHD+ 120Hz' }, { label: 'Chipset', value: 'MediaTek Dimensity 810' }, { label: 'Memory', value: '6/8GB + 128GB' }, { label: 'Battery', value: '5000mAh / 33W' }]
  },
  {
    id: 'poco-m4-pro', name: 'POCO M4 Pro', codename: 'miles', manufacturer: 'Xiaomi',
    androidVersions: ['Android 14', 'Android 13', 'Android 12', 'Android 11'], romCount: 4, firmware: 'Available', accent: 'violet',
    summary: 'A value-packed daily driver with a smooth display and an active community.',
    specs: [{ label: 'Display', value: '6.43” FHD+ 90Hz' }, { label: 'Chipset', value: 'MediaTek Helio G96' }, { label: 'Memory', value: '4/6GB + 64/128GB' }, { label: 'Battery', value: '5000mAh / 33W' }]
  }
];
export const getDeviceById = (id) => devices.find((device) => device.id === id);
export const getAllDevices = () => devices;
