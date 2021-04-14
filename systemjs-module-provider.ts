const SystemJS = (window as any).System;

const ModuleEntries = [...SystemJS.entries()].reduce(function (obj, entry) {
    const info = entry[0].split("/");
    obj[info[info.length]] = entry[0];
    return obj;
  }, []);

const viewAvailableModules = () => ModuleEntries;
const importModule = (name: string) => {
    try {
        const path = ModuleEntries[name] ?? new Error('Module Not Found.')
        if(path instanceof Error) throw path;
        return SystemJS.get(path);
    }
    catch (e) {
        console.error(`${name} module not found. SystemJS import failed.`)
    }   
}