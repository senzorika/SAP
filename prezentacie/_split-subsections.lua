-- A slide starts at every level-2 heading. Long slides with several level-3
-- subsections do not fit the screen, so every subsection after the first one
-- starts a new slide that repeats the parent title. The first subsection
-- stays with the parent unless the parent already carries a diagram, table
-- or list of its own.
function Pandoc(doc)
  local out = pandoc.List()
  local parent, subsections, copies, heavy = nil, 0, 0, false
  for _, block in ipairs(doc.blocks) do
    if block.t == 'Header' and block.level <= 2 then
      parent = block.level == 2 and block or nil
      subsections, heavy = 0, false
    elseif block.t == 'Header' and block.level == 3 and parent then
      subsections = subsections + 1
      if subsections > 1 or heavy then
        copies = copies + 1
        local repeated = parent:clone()
        repeated.identifier = parent.identifier .. '-' .. copies
        out:insert(repeated)
      end
    elseif parent and subsections == 0 and block.t ~= 'Para' and block.t ~= 'Plain' then
      heavy = true
    end
    out:insert(block)
  end
  doc.blocks = out
  return doc
end
