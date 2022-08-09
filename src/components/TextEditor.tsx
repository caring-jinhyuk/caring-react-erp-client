import React, { FC } from 'react';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/i18n/ko-kr';
import '@toast-ui/editor/dist/toastui-editor.css';

export interface TextEditorProps {
	value: string | undefined;
	editorRef: React.Ref<Editor>;
	onChange: () => void;
}

export const TextEditor: FC<TextEditorProps> = ({ value, editorRef, onChange }) => {
	return (
		<Editor
			initialValue={value}
			previewStyle={'vertical'}
			useCommandShortcut={false}
			initialEditType={'wysiwyg'}
			hideModeSwitch={true}
			language={'ko-KR'}
			onChange={onChange}
			ref={editorRef}
			height={'100%'}></Editor>
	);
};
