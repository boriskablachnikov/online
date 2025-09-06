
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
const supabaseUrl = 'https://witezjwsxewejxmflccq.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndpdGV6andzeGV3ZWp4bWZsY2NxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTcxOTU2NjYsImV4cCI6MjA3Mjc3MTY2Nn0.sP87maLnrXbYE-XeBlqqglW57L2Mc0So_drTxG_MRa0"
const supabase = createClient(supabaseUrl, supabaseKey)

const textbox = document.getElementById("textbox")

async function updateValue(new_val) {
    await supabase
        .from('value')
        .update({ value: new_val })
        .eq('id', 1)
}

async function getValue() {
    return (await supabase
        .from('value')
        .select()
        .eq('id', 1)).data[0].value
}

document.addEventListener("DOMContentLoaded", async ()=>{
    var value = await getValue()
    textbox.value = value
})

textbox.addEventListener("change", async ()=>{
    updateValue(textbox.value)
})
