/**
 * @license Copyright (c) 2014-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor.js'
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment.js'
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat.js'
import AutoImage from '@ckeditor/ckeditor5-image/src/autoimage.js'
import AutoLink from '@ckeditor/ckeditor5-link/src/autolink.js'
// import Base64UploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter.js'
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote.js'
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold.js'
import CloudServices from '@ckeditor/ckeditor5-cloud-services/src/cloudservices.js'
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js'
// import FindAndReplace from '@ckeditor/ckeditor5-find-and-replace/src/findandreplace.js'
import FontBackgroundColor from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor.js'
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor.js'
// import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily.js'
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize.js'
import Heading from '@ckeditor/ckeditor5-heading/src/heading.js'
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight.js'
// import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline.js'
import Image from '@ckeditor/ckeditor5-image/src/image.js'
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption.js'
import ImageInsert from '@ckeditor/ckeditor5-image/src/imageinsert.js'
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize.js'
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle.js'
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar.js'
// import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload.js'
import Indent from '@ckeditor/ckeditor5-indent/src/indent.js'
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock.js'
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic.js'
import Link from '@ckeditor/ckeditor5-link/src/link.js'
import LinkImage from '@ckeditor/ckeditor5-link/src/linkimage.js'
import List from '@ckeditor/ckeditor5-list/src/list.js'
import ListStyle from '@ckeditor/ckeditor5-list/src/liststyle.js'
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed.js'
// import PageBreak from '@ckeditor/ckeditor5-page-break/src/pagebreak.js'
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js'
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice.js'
import SpecialCharacters from '@ckeditor/ckeditor5-special-characters/src/specialcharacters.js'
import SpecialCharactersArrows from '@ckeditor/ckeditor5-special-characters/src/specialcharactersarrows.js'
import SpecialCharactersCurrency from '@ckeditor/ckeditor5-special-characters/src/specialcharacterscurrency.js'
import SpecialCharactersEssentials from '@ckeditor/ckeditor5-special-characters/src/specialcharactersessentials.js'
import Table from '@ckeditor/ckeditor5-table/src/table.js'
// import TableCaption from '@ckeditor/ckeditor5-table/src/tablecaption.js'
// import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties'
// import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties'
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar.js'
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation.js'
// import Title from '@ckeditor/ckeditor5-heading/src/title.js'
import TodoList from '@ckeditor/ckeditor5-list/src/todolist'
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline.js'
import WordCount from '@ckeditor/ckeditor5-word-count/src/wordcount.js'

class Editor extends ClassicEditor {}

// Plugins to include in the build.
Editor.builtinPlugins = [
	Alignment,
	Autoformat,
	AutoImage,
	AutoLink,
	// Base64UploadAdapter,
	BlockQuote,
	Bold,
	CloudServices,
	Essentials,
	// FindAndReplace,
	FontBackgroundColor,
	FontColor,
	// FontFamily,
	FontSize,
	Heading,
	Highlight,
	// HorizontalLine,
	Image,
	ImageCaption,
	ImageInsert,
	ImageResize,
	ImageStyle,
	ImageToolbar,
	// ImageUpload,
	Indent,
	IndentBlock,
	Italic,
	Link,
	LinkImage,
	List,
	ListStyle,
	MediaEmbed,
	// PageBreak,
	Paragraph,
	PasteFromOffice,
	SpecialCharacters,
	SpecialCharactersArrows,
	SpecialCharactersCurrency,
	SpecialCharactersEssentials,
	Table,
	// TableCaption,
	// TableCellProperties,
	// TableProperties,
	TableToolbar,
	TextTransformation,
	// Title,
	TodoList,
	Underline,
	WordCount
]

Editor.defaultConfig = {
	toolbar: {
		items: [
			'heading',
			'|',
			'bold',
			'italic',
			'link',
			'bulletedList',
			'numberedList',
			'todoList',
			'|',
			'outdent',
			'indent',
			'alignment',
			'|',
			'blockQuote',
			'highlight',
			'underline',
			'|',
			'fontColor',
			// 'fontFamily',
			'fontBackgroundColor',
			'fontSize',
			'|',
			'imageInsert',
			// 'imageUpload',
			'mediaEmbed',
			// 'insertTable',
			// '|',
			// 'pageBreak',
			// 'horizontalLine',
			// '|',
			// 'findAndReplace',
			'undo',
			'redo'
		]
	},
	image: {
		toolbar: ['imageTextAlternative', 'imageStyle:inline', 'imageStyle:block', 'imageStyle:side', 'linkImage']
	},
	table: {
		contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells']
	},
	// table: {
	// 	contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells', 'tableCellProperties', 'tableProperties']
	// },
	link: {
		decorators: {
			addTargetToExternalLinks: {
				mode: 'automatic',
				callback: url => /^(https?:)?\/\//.test( url ),
				attributes: {
					target: '_blank',
					rel: 'noopener noreferrer'
				}
			}
		}
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
}

export default Editor
