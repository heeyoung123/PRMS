import {style} from "@vanilla-extract/css";
import {vars} from "../../App.css.ts";

export const listWrapper=style({
	display:"flex",
	flexDirection:"column",
	marginRight:vars.spacing.listSpacing,
	padding: vars.spacing.big2,
	minWidth:vars.minWidth.list,
	width:'max-content',
	height:'max-content',
	borderRadius:10,
	backgroundColor: vars.color.list,

})
export const listName=style({
	fontSize:vars.fontSizing.A3,
	marginBottom:vars.spacing.big2,
})
export const header=style({
	display:"flex",
	alignItems:"center",
})
export const deleteButton=style({
	padding:vars.spacing.sm,
	borderRadius:20,
	fontSize:vars.fontSizing.A2,
	marginLeft:"auto",
	marginTop:"-15px",
	marginRight:"5px",
	cursor:"pointer",
	":hover":{
		backgroundColor:vars.color.task,
		boxShadow: vars.shadow.basic,
		opacity:0.8
	}
})