// Declaraciones de tipos para Firebase
declare module 'firebase/firestore' {
  export interface DocumentData {
    [field: string]: any;
  }

  export function getFirestore(app?: any): any;
  export function collection(firestore: any, path: string): any;
  export function doc(
    firestore: any,
    path: string,
    ...pathSegments: string[]
  ): any;
  export function getDoc(docRef: any): Promise<any>;
  export function addDoc(collectionRef: any, data: any): Promise<any>;
  export function serverTimestamp(): any;
  export function connectFirestoreEmulator(
    firestore: any,
    host: string,
    port: number
  ): void;
  export function enableNetwork(firestore: any): Promise<void>;
  export function disableNetwork(firestore: any): Promise<void>;
}
