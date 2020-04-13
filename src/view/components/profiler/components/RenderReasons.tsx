import { h } from "preact";
import { SidebarPanel, Empty } from "../../sidebar/SidebarPanel";
import { useStore, useObserver } from "../../../store/react-bindings";
import { RenderReason } from "../../../../adapter/10/renderer/renderReasons";
import s from "./RenderReason.css";
import { Message, MessageBtn } from "../../Message/Message";

function getReasonName(reason: RenderReason) {
	switch (reason) {
		case RenderReason.HOOKS_CHANGED:
			return "Hooks changed";
		case RenderReason.MOUNT:
			return "Component mounted";
		case RenderReason.PARENT_UPDATE:
			return "Parent updated";
		case RenderReason.PROPS_CHANGED:
			return "Props changed";
		case RenderReason.STATE_CHANGED:
			return "State changed";
		default:
			return "Unknown reason";
	}
}

export function RenderReasons() {
	const store = useStore();
	const isRecording = useObserver(() => store.profiler.isRecording.$);
	const commits = useObserver(() => store.profiler.commits.$);
	const reason = useObserver(() => store.profiler.activeReason.$);
	const commit = useObserver(() => store.profiler.activeCommit.$);
	const selected = useObserver(() => store.profiler.selectedNode.$);
	const captureReason = useObserver(
		() => store.profiler.captureRenderReasons.$,
	);

	if (commits.length === 0 || isRecording) {
		return null;
	}

	const hasReasons = reason !== null && reason.items && reason.items.length > 0;

	let rendered = false;
	if (!captureReason && commit) {
		const root = commit.nodes.get(commit.commitRootId);
		if (
			root &&
			selected &&
			selected.startTime >= root.startTime &&
			selected.endTime <= root.endTime
		) {
			rendered = true;
		}
	}

	return (
		<SidebarPanel title="Render reasons" empty="Did not render">
			<div data-testid="render-reasons">
				{reason !== null ? (
					<dl class={s.reason}>
						<dt class={s.reasonName}>
							{getReasonName(reason.type)}
							{hasReasons ? ":" : ""}
						</dt>
						<dd class={s.reasonValue}>
							{hasReasons && reason!.items!.join(", ")}
						</dd>
					</dl>
				) : (
					<Empty>{rendered ? "-" : "Did not render"}</Empty>
				)}
			</div>
			<div class={s.message}>
				<Message type={captureReason ? "info" : "warning"}>
					{captureReason
						? "Timings may be less accurate. "
						: "Capturing disabled. "}
					<MessageBtn
						onClick={() => {
							store.profiler.setRenderReasonCapture(!captureReason);
							store.profiler.isRecording.$ = true;
						}}
						testId="toggle-render-reason"
					>
						{captureReason ? "Disable" : "Enable"}
					</MessageBtn>
				</Message>
			</div>
		</SidebarPanel>
	);
}
