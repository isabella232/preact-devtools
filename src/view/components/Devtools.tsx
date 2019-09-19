import { h } from "preact";
import { TreeView } from "./TreeView";
import { Sidebar } from "./Sidebar";
import s from "./Devtools.css";
import { TreeBar } from "./TreeBar";
import { AppCtx, Store } from "../store";
import { ModalRenderer } from "./Modals";

export function DevTools(props: { store: Store }) {
	return (
		<AppCtx.Provider value={props.store}>
			<div class={s.root}>
				<div class={s.components}>
					<TreeBar />
					<TreeView />
				</div>
				<div class={s.sidebar}>
					<Sidebar title="Hydrator" />
				</div>
				<ModalRenderer />
			</div>
		</AppCtx.Provider>
	);
}
