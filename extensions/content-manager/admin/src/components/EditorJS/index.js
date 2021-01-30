import React from 'react'
import PropTypes from 'prop-types'
import EditorJS from 'react-editor-js'
import { EDITOR_JS_TOOLS } from './tools'

class Editor extends React.Component {
    componentDidMount() {
        console.log("mounted component, scheduling a delayed render...")
        setTimeout(() => {
            console.log("now rendering data in editor")

            const { value } = this.props
            
            let parsed
            try {
                parsed = JSON.parse(value)
            } catch {
                parsed = null
            }

            this.editorInstance.render(parsed)
        }, 1000)
    }

    render() {
        const { onChange, name, value } = this.props;
        
        return <EditorJS
                instanceRef={instance => this.editorInstance = instance}
                tools={EDITOR_JS_TOOLS}
                data={JSON.parse(value)}
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