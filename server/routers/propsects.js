const { Router } = require("express");
const prospect = require("../models/prospect");

const router = Router();

// Create record in MongoDB
router.post("/prospects", (request, response) => {
  const newProspect = new prospect.model(request.body);
  newProspect.save((err, prospect) => {
    return err ? response.sendStatus(500).json(err) : response.json(prospect);
  });
});

// Get all prospect records
router.get("/prospects", (request, response) => {
  prospect.model.find({}, (error, data) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(data);
  });
});

// Get a prospect by ID
router.get("/prospects/:id", (request, response) => {
  prospect.model.findById(request.params.id, (error, data) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(data);
  });
});

// Delete a prospect by ID
router.delete("/prospects/:id", (request, response) => {
  prospect.model.findByIdAndRemove(request.params.id, {}, (error, data) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(data);
  });
});

router.put("/prospects/:id", (request, response) => {
  const body = request.body;
  prospect.model.findByIdAndUpdate(
    request.params.id,
    {
      $set: {
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        property: body.property,
        notes: body.notes
      }
    },
    (error, data) => {
      if (error) return response.sendStatus(500).json(error);
      return response.json(request.body);
    }
  );
});

module.exports = router;
