# ibeacon-id-gen
iBeacon ID Generator

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
