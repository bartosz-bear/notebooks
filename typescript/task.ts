type Fn<Inputs extends any[] = any[], Output = any> = (...a: Inputs) => Output
type Cb<X> = Fn<[X], void>
type Cb0 = Fn<[], void>
type Cancel = Cb0

type Ms = number
type Sec = number
type Min = number
type Hour = number
type Day = number

const TODO = (desc: string) => (() => new Error(`TODO::${desc}`)) as any

type SecToMs = (sec: Sec) => Ms
type MinToMs = (min: Min) => Ms
type HourToMs = (hour: Hour) => Ms
type DayToMs = (day: Day) => Ms

type Timeout = Fn<[callback: Cb0, after: Ms], Cancel>
//const timeout: Timeout = TODO('USE: setTimeout / clearTimeout')

/*global clearTimeout, setTimeout, console*/
const timeout: Timeout = (callback, after) => {
  const timeoutID = setTimeout(callback, after)
  return () => clearTimeout(timeoutID)
}

function myFunc() {
  console.log('hello')
}

const a = timeout(myFunc, 2000)



type Interval = Fn<[callback: Cb0, every: Ms], Cancel>
const interval: Interval = TODO('USE: setInterval / clearInterval')

type Debounce0 = Fn<[callback: Cb0, ignoreFor: Ms], Cb0>
const debounce0: Debounce0 = TODO(
  'call the param function only if return function has not been called for ignoreFor'
)

// optional
type Delay = <X>(x: X) => Fn<[callback: Cb<X>, after: Ms], Cancel>
const delay: Delay = TODO('Deliver X after some time')

type Wait = Fn<[delay: Ms], Promise<unknown>>
const wait: Wait = TODO('promise that resolves after delay')