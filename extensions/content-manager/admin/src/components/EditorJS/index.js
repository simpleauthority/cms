import React from 'react'
import PropTypes from 'prop-types'
import EditorJS from 'react-editor-js'
import { EDITOR_JS_TOOLS } from './tools'

class Editor extends React.Component {
    componentDidMount() {
        this.editorInstance
    }

    render() {
        const { onChange, name, value } = this.props;
        
        let currentData
        try {
            currentData = JSON.parse(value)
        } catch {
            currentData = null
        }
        
        return <EditorJS
                instanceRef={instance => this.editorInstance = instance}
                data={currentData}
                tools={EDITOR_JS_TOOLS}
                onChange={async () => {
                    try {
                        const data = await this.editorInstance.save();

                        onChange({ 
                            target: {
                                name,
                                value: JSON.stringify(data)
                            }
                        })
                    } catch (error) {
                        console.error("Failed to save the new data")
                    }
                }} 
            />;
    }
}

Editor.propTypes = {
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string
};

export default Editor;