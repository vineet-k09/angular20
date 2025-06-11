| Hook                      | Description                                                 |
| ------------------------- | ----------------------------------------------------------- |
| `ngOnChanges()`           | Runs whenever an `@Input()` property changes                |
| `ngAfterContentInit()`    | Runs when projected content (`<ng-content>`) is initialized |
| `ngAfterContentChecked()` | Runs every time Angular checks content projection           |
| `ngAfterViewChecked()`    | Fires after every change detection cycle (like a watchdog)  |


| Hook / Directive          | Use it for…                   |
| ------------------------- | ----------------------------- |
| `ngOnInit()`              | Setup, data fetching          |
| `ngAfterViewInit()`       | DOM access, `ViewChild` magic |
| `ngOnDestroy()`           | Cleanup, unsubscribing        |
| `*ngIf`                   | Show/hide based on condition  |
| `*ngFor`                  | Loops/iteration               |
| `[ngClass]` / `[ngStyle]` | Dynamic styles                |
| `@ViewChild()`            | Grab DOM elements in TS       |
