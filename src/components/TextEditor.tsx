import React, { FC } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

type TextEditorProps = {
	value: string | undefined;
	onChange: React.Dispatch<React.SetStateAction<string | undefined>>;
};

const TextEditor: FC<TextEditorProps> = ({ value, onChange }) => {
	return (
		<>
			<ReactQuill value={value} onChange={onChange}></ReactQuill>
		</>
	);
};

export default TextEditor;
