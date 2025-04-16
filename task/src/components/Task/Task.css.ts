import {style} from "@vanilla-extract/css"
import {vars} from "../../App.css.ts";

export const container =style({
	display: "flex",
	flexDirection: "column",
	padding: vars.spacing.medium,
	backgroundColor:vars.color.task,
	borderRadius:10,
	marginBottom: vars.spacing.big2,
	boxShadow:vars.shadow.basic,
	cursor:'pointer',
	":hover":{
		backgroundColor:vars.color.taskHover,
		transition:"scale(1.03)",
	}
})
export const title=style({
	fontSize:vars.fontSizing.A4,
	fontWeight:'bold',
	marginBottom:vars.spacing.sm,
})
export const description=style({
	fontSize:vars.fontSizing.B1
})