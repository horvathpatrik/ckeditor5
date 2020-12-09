import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import AttributeCommand from '@ckeditor/ckeditor5-basic-styles/src/attributecommand';

const UNDERLINE = 'underline';

export default class FillBlankEditing extends Plugin {
	init() {
		const editor = this.editor;

		// Allow underline attribute on text nodes.
		editor.model.schema.extend('$text', { allowAttributes: UNDERLINE });
		editor.model.schema.setAttributeProperties(UNDERLINE, {
			isFormatting: true,
			copyOnEnter: true
		});

		editor.conversion.attributeToElement({
			model: UNDERLINE,
			view: 'u'
		});

		// Create command.
		editor.commands.add('fillBlank', new AttributeCommand(editor, UNDERLINE));
	}
}
