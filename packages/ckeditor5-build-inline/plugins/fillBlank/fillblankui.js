import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

import fillBlankIcon from './icons/fill-blank.svg';

const UNDERLINE = 'underline';

export default class FillBlankUI extends Plugin {

	init() {
		const editor = this.editor;
		const t = editor.t;

		// Add button to feature components.
		editor.ui.componentFactory.add('fillBlank', locale => {
			const command = editor.commands.get('fillBlank');
			const view = new ButtonView(locale);

			view.set({
				label: t('Fill blank'),
				icon: fillBlankIcon,
				tooltip: true,
				isToggleable: true
			});

			view.bind('isOn', 'isEnabled').to(command, 'value', 'isEnabled');

			// Execute command.
			this.listenTo(view, 'execute', () => {
				editor.fire('fillBlank.trigger');
				editor.execute('fillBlank');
				editor.editing.view.focus();
			});

			return view;
		});
	}
}
