import { request } from 'strapi-helper-plugin';

import Embed from '@editorjs/embed'
import Table from '@editorjs/table'
import Paragraph from '@editorjs/paragraph'
import List from '@editorjs/list'
import Warning from '@editorjs/warning'
import Code from '@editorjs/code'
import Image from '@editorjs/image'
import Raw from '@editorjs/raw'
import Header from '@editorjs/header'
import Quote from '@editorjs/quote'
import Marker from '@editorjs/marker'
import CheckList from '@editorjs/checklist'
import Delimiter from '@editorjs/delimiter'
import InlineCode from '@editorjs/inline-code'

function uploadFile(file) {
    const formData = new FormData();
    formData.append('files', file);
    const headers = {};

    return request('/upload', {
        method: 'POST',
        headers,
        body: formData
    }, false, false)
}
 
export const EDITOR_JS_TOOLS = {
  embed: {
      class: Embed,
      services: {
          youtube: true,
          codepen: true,
          gfycat: true
      }
  },
  table: Table,
  paragraph: {
    class: Paragraph,
    inlineToolbar: true,
  },
  list: List,
  warning: Warning,
  code: Code,
  image: {
      class: Image,
      config: {
          uploader: {
              uploadByFile(file) {
                  return uploadFile(file).then((resp) => {
                      return {
                          success: 1,
                          file: { url: resp[0].url }
                      }
                  }).catch((err) => {
                      throw err
                  })
              },
              uploadByUrl(url) {
                  return new Promise((resolve, reject) => {
                      resolve({
                          success: 1,
                          file: { url }
                      })
                  })
              }
          }
      }
  },
  raw: Raw,
  header: Header,
  quote: Quote,
  marker: Marker,
  checklist: CheckList,
  delimiter: Delimiter,
  inlineCode: InlineCode
}