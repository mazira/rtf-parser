import { GlobalStateWithGroupState } from "./handleGroupState.types";

export interface UnicodeSkipGroupState {
    uc: number;
}

export interface UnicodeSkipGlobalState extends GlobalStateWithGroupState<UnicodeSkipGroupState> {
    _skip: number;
}
