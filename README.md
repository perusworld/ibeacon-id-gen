# ibeacon-id-gen
iBeacon ID Generator

#sample output
```
{ 
  input: 
   { 
     uuid: 'E004EA86-AD5D-49BC-B1D4-E62062A9567C',
     major: 0,
     minor: 0,
     txPower: 51200 
    },
  formatted: 
   { 
     uuid: 'E0 04 EA 86 AD 5D 49 BC B1 D4 E6 20 62 A9 56 7C',
     major: '00 00',
     minor: '00 00',
     txPower: 'C8 00' },
  hcitool: { 
     command: 'sudo hcitool -i hci0 cmd 0x08 0x0008 1E 02 01 1A 1A FF 4C 00 02 15 E0 04 EA 86 AD 5D 49 BC B1 D4 E6 20 62 A9 56 7C 00 00 00 00 C8 00' 
  } 
}
  ```


# usage
- With specific uuid, major, minor and tx power values
```
node test.js <uuid> <major> <minor> <tx power>
```
example 
```
node test.js 9B69B0DC-9ED2-4102-8CC3-2C9B2E8B5A32 1000 2004 15
```
- With randomly generated uuid and specified major, minor and tx power values
```
node test.js <major> <minor> <tx power>
```
example 
```
node test.js 1000 2004 15
```
- With randomly generated uuid and specified major and minor values and static tx power value
```
node test.js <major> <minor>
```
example 
```
node test.js 1000 2004
```
