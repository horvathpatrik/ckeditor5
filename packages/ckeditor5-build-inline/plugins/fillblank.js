import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import FillBlankEditing from './fillBlank/fillblankediting';
import FillBlankUI from './fillBlank/fillblankui';

export default class FillBlank extends Plugin {
	static get requires() {
		return [ FillBlankEditing, FillBlankUI ];
	}

	static get pluginName() {
		return 'FillBlank';
	}
}
