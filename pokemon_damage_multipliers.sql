-- i choose you! --
SELECT pokemon_name,
       p.str*m.multiplier as modifiedStrength,
       m.element
FROM pokemon as p
JOIN multipliers as m ON m.id = p.element_id
WHERE p.str * m.multiplier >= 40
ORDER BY modifiedStrength desc